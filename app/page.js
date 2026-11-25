import Link from "next/link";
import Counter from "./components/Counter";

export default function Home() {
  const skills = ["HTML", "CSS", "JavaScript", "Git", "Docker"];

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Hello! I am Naris Thongjaroen</h1>
      <p>เว็บไซต์นี้สร้างด้วย Next.js และรันอยู่ภายใน Docker Container</p>

      <h2>ทักษะที่กำลังเรียน</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <Counter />

      <p>
        <Link href="/about">ไปหน้าเกี่ยวกับฉัน →</Link>
      </p>
    </main>
  );
}