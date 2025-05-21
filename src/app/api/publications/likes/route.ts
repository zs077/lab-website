import { NextResponse } from 'next/server';

// 模拟数据库存储
let likesData: { [key: number]: number } = {
  1: 42,
  2: 38,
  3: 29,
  4: 35,
  5: 27,
  6: 31,
  7: 24,
};

// 获取所有文章的喜欢数
export async function GET() {
  return NextResponse.json(likesData);
}

// 更新文章的喜欢数
export async function POST(request: Request) {
  const { publicationId, action } = await request.json();
  
  if (!publicationId || !action) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (action === 'like') {
    likesData[publicationId] = (likesData[publicationId] || 0) + 1;
  } else if (action === 'unlike') {
    likesData[publicationId] = Math.max((likesData[publicationId] || 0) - 1, 0);
  }

  return NextResponse.json({ 
    success: true, 
    likes: likesData[publicationId] 
  });
} 