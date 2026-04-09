import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'mentor@stellamatch.dev' },
    update: {},
    create: {
      email: 'mentor@stellamatch.dev',
      passwordHash: 'seeded_hash',
      name: 'Nova Mentor',
      city: 'San Francisco',
      college: 'Skyline Tech',
      skillValue: 92,
      trustScore: 95
    }
  });
}

main().finally(() => prisma.$disconnect());
