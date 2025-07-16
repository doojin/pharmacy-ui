import { Card, Image } from "@chakra-ui/react"
import type React from "react";

const Demo: React.FC<{ screenshots: string[] }> = ({ screenshots }) => {
    return (
        <Card.Root>
            <Card.Body>
                {
                    screenshots.map((screenshot: string) => (
                        <Image src={screenshot}/>
                    ))
                }
            </Card.Body>
        </Card.Root>
    )
}

export default Demo;