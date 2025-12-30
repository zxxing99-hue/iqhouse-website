import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './drizzle/schema.js';

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const db = drizzle(connection, { schema, mode: 'default' });

const sampleProducts = [
  {
    name: 'Reading Pen Learning System',
    nameZh: '点读笔学习系统',
    category: 'language',
    description: 'Interactive reading pen system designed for early language learners. Developed in collaboration with professors from National Taiwan University and UC Berkeley, specifically adapted for non-English speaking children.',
    descriptionZh: '专为早期语言学习者设计的互动点读笔系统。由台湾大学和加州大学伯克利分校教授联合开发，特别适配非英语母语儿童的学习需求。',
    ageRange: '3-8 years',
    imageUrl: '/images/reading-pen-usage.jpg',
    published: 1,
  },
  {
    name: 'Magnetic Foam Number Set',
    nameZh: '磁性泡棉数字套装',
    category: 'math',
    description: 'Soft, safe magnetic foam numbers that transform abstract mathematical concepts into tangible, hands-on learning experiences. Children can physically manipulate numbers to understand counting, addition, and subtraction.',
    descriptionZh: '柔软安全的磁性泡棉数字，将抽象的数学概念转化为可触摸的动手学习体验。儿童可以通过物理操作数字来理解计数、加法和减法。',
    ageRange: '4-7 years',
    imageUrl: '/images/store-photo-1.jpg',
    published: 1,
  },
  {
    name: 'Wooden Puzzle Collection',
    nameZh: '木质拼图系列',
    category: 'spatial',
    description: 'Carefully designed wooden puzzles with interlocking pieces that help children understand spatial relationships through tactile feedback. Features concave-convex structures that provide intuitive assembly logic.',
    descriptionZh: '精心设计的木质拼图，通过凹凸结构让儿童直观理解拼接逻辑。触觉反馈帮助儿童建立空间关系认知。',
    ageRange: '3-6 years',
    imageUrl: '/images/store-photo-2.jpg',
    published: 1,
  },
  {
    name: 'Companion Play Game Set',
    nameZh: '陪伴系列游戏套装',
    category: 'hands-on',
    description: 'A game designed for parent-child interaction with simple rules, competitive elements, and multiple outcome possibilities (2600+ variations). Encourages independent play while supporting social development.',
    descriptionZh: '专为亲子互动设计的游戏，规则简单易懂，具备竞争元素，拥有2600多种结果可能性。鼓励独立玩耍的同时支持社交能力发展。',
    ageRange: '5-10 years',
    imageUrl: '/images/students-group.jpg',
    published: 1,
  },
  {
    name: 'Multi-Skill Learning Board',
    nameZh: '综合能力学习板',
    category: 'multi-skill',
    description: 'Integrated learning tool that combines language, math, and spatial reasoning activities. Designed based on real classroom observations to support holistic child development.',
    descriptionZh: '整合语言、数学和空间推理活动的综合学习工具。基于真实课堂观察设计，支持儿童全面发展。',
    ageRange: '4-8 years',
    imageUrl: '/images/students-playground.jpg',
    published: 1,
  },
];

console.log('Starting to seed products...');

for (const product of sampleProducts) {
  try {
    await db.insert(schema.products).values(product);
    console.log(`✓ Added: ${product.name}`);
  } catch (error) {
    console.error(`✗ Failed to add ${product.name}:`, error.message);
  }
}

console.log('Seeding completed!');
await connection.end();
process.exit(0);
