const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const CUP_POINTS = [15,12,10,9,8,7,6,5,4,3,2,1];

async function fixCupPoints() {
  const snap = await db.collection("cup_results").get();
  
  for (const doc of snap.docs) {
    const data = doc.data();
    const month = data.month;
    const results = data.results || [];
    
    // 순위별로 정렬
    const sorted = [...results].filter(r => r.rank > 0).sort((a, b) => a.rank - b.rank);
    
    let changed = false;
    const updated = results.map(r => {
      if (!r.rank || r.rank === 0) return r;
      const correctPoints = CUP_POINTS[r.rank - 1] || 0;
      if (r.points !== correctPoints) {
        console.log(`${month} - ${r.name}: ${r.rank}위 포인트 ${r.points} → ${correctPoints}`);
        changed = true;
        return { ...r, points: correctPoints };
      }
      return r;
    });
    
    if (changed) {
      await db.collection("cup_results").doc(doc.id).update({ results: updated });
      console.log(`${month} 업데이트 완료!`);
    } else {
      console.log(`${month} - 수정 없음`);
    }
  }
  
  console.log("\n✅ 모든 달 포인트 수정 완료!");
  process.exit(0);
}

fixCupPoints().catch(e => {
  console.error("오류:", e);
  process.exit(1);
});
