import { NextResponse } from "next/server"

export const getErrorResponse = (message, statusCode, successStatus) => {
    return NextResponse.json(
        {
            message : message,
            success : successStatus,
        },
        {
            status : statusCode,
        }
    );
};