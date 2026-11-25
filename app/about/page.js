import Link from "next/link";

export default function About() {
  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>เกี่ยวกับฉัน</h1>
      <p>นักศึกษาระดับ ปวส. สาขาเทคโนโลยีสารสนเทศ</p>
      <Link href="/">← กลับหน้าแรก</Link>
    </main>
  );
}