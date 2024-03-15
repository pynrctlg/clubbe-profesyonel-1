import * as contentRepo from '@/services/content';
import { NextResponse } from 'next/server';

export async function GET(req) {

    const str = req.nextUrl.searchParams.get('str');
    const data = await contentRepo.search(`${str}`);

    return NextResponse.json(data, { status: 200 });

}