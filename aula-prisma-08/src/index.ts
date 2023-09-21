import prisma from "./database";

(async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: { id: true },
    where: {
      jobId: null
    }
  })
  students.sort((a, b) =>  b._count.id - a._count.id );
  console.log(students);
})()