export async function GET() {
  return Response.json({
    message: "สวัสดีจาก Backend ของ Next.js",
    course: "Front-End Development",
    students: 35,
  });
}