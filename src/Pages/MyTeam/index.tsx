import { ExpandCircleDown } from "@mui/icons-material";
import * as React from "react";
import CardData from "../../Components/CardData";
import MessageBoard from "../../Components/MessageBoard";
import { Card, CardRow, NoStyleA, RowContainer, StyledHR, StyledVR } from "../../Components/Shared/shared.styled";
import { CardHeaderTypography, CardRowTypography, MyHeaderTypography } from "../../Components/Shared/typography.styled";
import { MyTeamContainer } from "./MyTeam.styled";
const MyTeam = () => {
    const teamData = [
      {
        name: "Teammates",
        data: [
          {
            key: 0,
            data: [
              {
                text: "Adam Meyer",
                link: "https://www.google.com",
              },
              {
                text: 8,
                link: "https://wikipedia.com",
              },
            ],
          },
          {
            key: 1,
            data: [
              {
                text: "Vinny Mauri",
                link: "https://www.google.com",
              },
              {
                text: 12,
                link: "https://wikipedia.com",
              },
            ],
          },
          {
            key: 2,
            data: [
              {
                text: "Dayton Carlson",
                link: "https://www.google.com",
              },
              {
                text: 12,
                link: "https://wikipedia.com",
              },
            ],
          },
          {
            key: 3,
            data: [
              {
                text: "Porter Hill",
                link: "https://www.google.com",
              },
              {
                text: 10,
                link: "https://wikipedia.com",
              },
            ],
          },
          {
            key: 4,
            data: [
              {
                text: "Wyatt Hanson",
                link: "https://www.google.com",
              },
              {
                text: 10,
                link: "https://wikipedia.com",
              },
            ],
          },
          {
            key: 5,
            data: [
              {
                text: "Rowdy Menefee",
                link: "https://www.google.com",
              },
              {
                text: 10,
                link: "https://wikipedia.com",
              },
            ],
          },
          {
            key: 6,
            data: [
              {
                text: "Keene Sample",
                link: "https://www.google.com",
              },
              {
                text: 10,
                link: "https://wikipedia.com",
              },
            ],
          },
          {
            key: 7,
            data: [
              {
                text: "Conant Smith",
                link: "https://www.google.com",
              },
              {
                text: 10,
                link: "https://wikipedia.com",
              },
            ],
          },
          {
            key: 8,
            data: [
              {
                text: "Blake Gallardo",
                link: "https://www.google.com",
              },
              {
                text: 10,
                link: "https://wikipedia.com",
              },
            ],
          },
        ],
      },
      {
        name: "Practices",
        data: [
          {
            key: 0,
            data: [
              {
                text: "Monday",
              },
              {
                text: "7:00",
              },
              {
                text: "Track",
              },
            ],
          },
          {
            key: 1,
            data: [
              {
                text: "Tuesday",
              },
              {
                text: "6:00",
              },
              {
                text: "Grass",
              },
            ],
          },
          {
            key: 2,
            data: [
              {
                text: "Wendesday",
              },
            ],
          },
          {
            key: 3,
            data: [
              {
                text: "Thursday",
              },
              {
                text: "7:00",
              },
              {
                text: "Track",
              },
            ],
          },
          {
            key: 4,
            data: [
              {
                text: "Friday",
              },
              {
                text: "6:00",
              },
              {
                text: "Track",
              },
            ],
          },
          {
            key: 5,
            data: [
              {
                text: "Saturday",
              },
              {
                text: "7:00",
              },
              {
                text: "Ramada",
              },
            ],
          },
          {
            key: 6,
            data: [
              {
                text: "Sunday",
              },
            ],
          },
        ],
      },
      {
        name: "Races",
        data: [
          {
            key: 0,
            data: [
              {
                text: "Pre-Nationals",
              },
              {
                text: "9/30/22",
              },
              {
                text: "Stillwater, Oklahoma",
              },
            ],
          },
          {
            key: 1,
            data: [
              {
                text: "Nationals",
              },
              {
                text: "12/11/22",
              },
              {
                text: "Stillwater, Oklahoma",
              },
            ],
          },
        ],
      },
      {
        name: "Announcements",
        data: [
          {
            key: 0,
            data: [
              {
                text: "Moving practice to the grass tomorrow"
              }
            ],
          },
          {
            key: 1,
            data: [
              {
                text: "Race has been delayed 30 minutes. Plan accordingly",
              }
            ],
          },
        ],
      },
    ];
    return (
      <MyTeamContainer>
        <MyHeaderTypography>Arizona State University</MyHeaderTypography>
        <div style={{display: "flex", flexWrap: "nowrap"}}>
        <RowContainer>
          <>
            {teamData
              .sort(function (a, b) {
                return b.data.length - a.data.length;
              })
              .map(function (data: any) {
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
        <MessageBoard />
        </div>
      </MyTeamContainer>
    );
}

export default MyTeam;