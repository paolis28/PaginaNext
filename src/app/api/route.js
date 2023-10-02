import {NextResponse} from 'next/server';

export async function GET(){
    return NextResponse.json({
        usuario:"Paola Mayorga",
        contraseña: "123"
    })
}