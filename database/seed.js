const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'demo@stellamatch.dev' },
    update: {},
    create: {
      email: 'demo@stellamatch.dev',
      passwordHash: 'seed_hash_placeholder',
      name: 'Demo Learner',
      city: 'San Francisco',
      skillValue: 68,
      trustScore: 82
    }
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
