import * as React from "react"
import CardData from "../../Components/CardData";
import Navbar from "../../Components/Navbar";
import { Card, RowContainer, StyledHR } from "../../Components/Shared/shared.styled";
import { CardHeaderTypography, MyHeaderTypography } from "../../Components/Shared/typography.styled";
import { MyTrainingContainer } from "./MyTraining.styled";

const TrainingHome = () => {
    const date = new Date().toLocaleDateString();
    const training = [
        {
            name: "Today",
            data: [
                {
                    key: 0,
                    data: [
                        {
                            text: new Date(2022, 5, 11).toLocaleString().split(',')[0]
                        },
                        {
                            text: "9"
                        },
                        {
                            text: "63"
                        }
                    ]
                }
            ]
        },
        {
            name: "This Week",
            data: [
                {
                    key: 0,
                    data: [
                        {
                            text: new Date(2022, 5, 11).toLocaleString().split(',')[0]
                        },
                        {
                            text: "9"
                        },
                        {
                            text: "63"
                        }
                    ]
                },
                {
                    key: 1,
                    data: [
                        {
                            text: new Date(2022, 5, 10).toLocaleString().split(',')[0]
                        },
                        {
                            text: "7"
                        },
                        {
                            text: "52.5"
                        }
                    ]
                },
                {
                    key: 2,
                    data: [
                        {
                            text: new Date(2022, 5, 9).toLocaleString().split(',')[0]
                        },
                        {
                            text: "4"
                        },
                        {
                            text: "28"
                        }
                    ]
                },
                {
                    key: 3,
                    data: [
                        {
                            text: new Date(2022, 5, 8).toLocaleString().split(',')[0]
                        },
                        {
                            text: "8"
                        },
                        {
                            text: "56"
                        }
                    ]
                },
                {
                    key: 4,
                    data: [
                        {
                            text: new Date(2022, 5, 7).toLocaleString().split(',')[0]
                        },
                        {
                            text: "4"
                        },
                        {
                            text: "28"
                        }
                    ]
                },
                {
                    key: 5,
                    data: [
                        {
                            text: new Date(2022, 5, 6).toLocaleString().split(',')[0]
                        },
                        {
                            text: "7"
                        },
                        {
                            text: "49"
                        }
                    ]
                }
            ]
        },
        {
            name: "Planned",
            data: [
                {
                    key: 0,
                    data: [
                        {
                            text: new Date(2022, 5, 12).toLocaleString().split(',')[0]
                        },
                        {
                            text: "6"
                        }
                    ]
                },
                {
                    key: 1,
                    data: [
                        {
                            text: new Date(2022, 5, 13).toLocaleString().split(',')[0]
                        },
                        {
                            text: "6"
                        }
                    ]
                },
                {
                    key: 2,
                    data: [
                        {
                            text: new Date(2022, 5, 14).toLocaleString().split(',')[0]
                        },
                        {
                            text: "9"
                        }
                    ]
                }
            ]
        }
    ]
    return (
      <MyTrainingContainer>
        <MyHeaderTypography>{date}</MyHeaderTypography>
        <RowContainer>
            <>
              {training.map(function (data: any) {
                  return (
                    <Card margin="20px 30px">
                      <CardHeaderTypography>{data.name}</CardHeaderTypography>
                      <StyledHR />
                      <CardData data={data.data} />
                    </Card>
                  );
                })}
            </>
        </RowContainer>
      </MyTrainingContainer>
    );
}

export default TrainingHome;