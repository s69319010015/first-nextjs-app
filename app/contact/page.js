import Link from 'next/link';

export default function Contact() {
  return (
    <main style={{ maxWidth: '720px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', gap: '16px', marginBottom: '24px', borderBottom: '1px solid #ddd', paddingBottom: '12px' }}>
        <Link href="/">หน้าแรก</Link>
        <Link href="/about">ไปหน้าเกี่ยวกับฉัน</Link>
        <Link href="/contact">ติดต่อฉัน</Link>
      </nav>

      <h1>ช่องทางการติดต่อ</h1>
      <ul>
        <li><strong>อีเมล:</strong> 69319010015@bncc.ac.th</li>
        <li><strong>GitHub:</strong> https://github.com/s69319010015</li>
      </ul>
    </main>
  );
}
