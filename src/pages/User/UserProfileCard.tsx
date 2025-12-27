import { Avatar, Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import type { UserI } from "../../interface";
import PersonIcon from '@mui/icons-material/Person';

interface Props {
  user: UserI;
  onSelectUser: (user: UserI) => void;
  isActive: boolean;
}

export const UserProfileCard = (props: Props) => {
  return (
    <>
      <Card>
        <CardActionArea
          component="div"
          data-active={props.isActive ? '' : undefined}
          onClick={() => props.onSelectUser(props.user)}
          sx={{
            height: '100%',
            '&[data-active]': {
              backgroundColor: 'action.selected',
              '&:hover': {
                backgroundColor: 'action.selectedHover',
              },
            },
          }}
        >
          <CardContent>
            <Box>
              <div className="flex items-center justify-center">
                <Avatar
                  className="m-2"
                  sx={{
                    bgcolor: 'primary.main',
                    width: 64,
                    height: 64,
                  }}
                >
                  <PersonIcon sx={{ fontSize: 40 }} />
                </Avatar>
              </div>
              <div>
                <Typography
                  component="div"
                  sx={{ fontWeight: 'bold', fontextTransform: "capitalize", textAlign: "center" }}
                  className="text-sm"
                >
                  {props.user.name.length > 15 ? props.user.name.substring(0, 20) + '...' : props.user.name}
                </Typography>
              </div>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}
