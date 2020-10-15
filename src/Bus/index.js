import React from 'react'
import { Stage, Layer, Group, Rect, Circle } from 'react-konva'

const Car = ({
    frontWheel,
    rearWheel
}) => {
    return (
        <>
            <Stage
              width={window.innerWidth - 20}
              height={window.innerHeight - 20}
            >
                <Layer>
                    <Group>
                        <Rect
                            x={150}
                            y={20}
                            width={100}
                            height={20}
                            fill="yellow"
                            stroke="black"
                            strokeWidth={1.5}
                        />
                         <Rect
                            x={150}
                            y={40}
                            width={130}
                            height={20}
                            fill="yellow"
                            stroke="black"
                            strokeWidth={1.5}
                        />
                        <Circle
                            x={180}
                            y={65}
                            width={10}
                            height={10}
                            fill="8891AB"
                            radius={12}
                            {...frontWheel}
                        />
                        <Circle
                            x={250}
                            y={65}
                            width={10}
                            height={10}
                            fill="8891AB"
                            radius={12}
                            {...rearWheel}
                        />
                    </Group>
                </Layer>
            </Stage>
        </>
    )
}

export default Car
