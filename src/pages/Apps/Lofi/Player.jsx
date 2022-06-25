import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";

import { useStateContext } from "../../../contexts/ContextProvider";
import { useLofiContext } from "../../../contexts/LofiProvider";
import { radioData } from "../../../components/Utils/Utils";

export default function Player() {
  const { currentColor } = useStateContext();
  const {
    play,
    setPlay,
    prevSong,
    nextSong,
    song,
    radio,
    volume,
    handleVolume,
  } = useLofiContext();

  return (
    <Box
      className="p-6 rounded-xl w-350 bg-cover"
      style={{
        backgroundImage: `url(${radio.img})`,
      }}
    >
      <Box className="flex items-center justify-center">
        <IconButton
          disabled={song <= 0}
          sx={{ "&:disabled": { opacity: 0.3 } }}
          onClick={prevSong}
        >
          <FastRewindRounded
            className={`text-4xl`}
            sx={{ color: currentColor }}
          />
        </IconButton>
        <IconButton onClick={() => setPlay(!play)}>
          {!play ? (
            <PlayArrowRounded
              className="text-6xl"
              sx={{ color: currentColor }}
            />
          ) : (
            <PauseRounded className="text-6xl" sx={{ color: currentColor }} />
          )}
        </IconButton>
        <IconButton
          disabled={song >= radioData.length - 1}
          sx={{ "&:disabled": { opacity: 0.3 } }}
          onClick={nextSong}
        >
          <FastForwardRounded
            className="text-4xl "
            sx={{ color: currentColor }}
          />
        </IconButton>
      </Box>
      <Stack className="flex gap-2 flex-row mb-1 px-1 items-center">
        <VolumeDownRounded className="text-2xl " sx={{ color: currentColor }} />
        <Slider
          value={volume}
          onChange={handleVolume}
          sx={{
            color: currentColor,
            "& .MuiSlider-track": {},
            "& .MuiSlider-thumb": {
              backgroundColor: "#fff",
              "&:before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
        <VolumeUpRounded className="text-2xl  " sx={{ color: currentColor }} />
      </Stack>
    </Box>
  );
}
