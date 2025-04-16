"use client";

import { use } from 'react';
import Room from "@/modules/room/components/Room";

type Params = Promise<{ roomId: string }>;

export default function RoomPage({
    params,
}: {
    params: Params;
}) {
    const resolvedParams = use(params);
    return <Room roomId={resolvedParams.roomId} />;
}