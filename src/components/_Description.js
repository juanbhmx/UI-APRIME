import { Card, Grid, Text } from "@nextui-org/react";
import uno from '../assets/img/1.webp'
import dos from '../assets/img/2.jpg'
import tres from '../assets/img/3.webp'
import cuatro from '../assets/img/3.jpg'
const Description = () => {
    const list = [
        {
            numero: "1",
            platform: "AMAZON ORIGINAL",
            title: "#1 SERIE ON PRIME VIDEO",
            img: "../assets/img/1.webp",

        },
        {
            numero: "2",
            platform: "AMAZON ORIGINAL",
            title: "ALL EPISODES AVAILABLE",
            img: {dos},

        },
        {
            numero: "3",
            platform: "AMAZON ORIGINAL",
            title: "NEW SERIES",
            img: {tres},

        },
        {
            numero: "4",
            platform: "AMAZON ORIGINAL",
            title: "NEW SERIES",
            img: {cuatro},

        }
    ];
    return (
        <>
            <div className="row">
                <div className="d-flex align-items-start position margincards col-md-12">
                    <p className="text-info">Prime</p>&nbsp;<p className="text-light">Top 10 in the US</p>&nbsp;
                    <i class="bi bi-patch-check-fill text-info"></i>
                </div>
                <div className="col cardsss">
                    
                    <Grid.Container gap={2} justify="flex-start">
                        {list.map((item, index) => (
                            
                            <Grid xs={5} sm={3} key={index}>
                                <p className="text-light numeros">{item.numero}</p>
                                <Card className="cardno" isPressable>
                                    <Card.Body css={{ p: 0 }}>
                                        <Card.Image
                                            src={uno}
                                            objectFit="cover"
                                            width="190%"
                                            height={100}
                                            alt={item.title}
                                        />
                                    </Card.Body>
                                    <Card.Footer css={{ justifyItems: "flex-center" }}>
                                            <Text b>{item.title}</Text>
                                    </Card.Footer>
                                </Card>
                            </Grid>
                        ))}
                    </Grid.Container>
                </div>

            </div>
        </>
    )
}

export default Description;