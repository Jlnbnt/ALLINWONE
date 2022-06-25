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

import { radioData } from "../../../components/Utils/Utils";

import { useStateContext } from "../../../contexts/ContextProvider";
import { useLofiContext } from "../../../contexts/LofiProvider";

export default function MiniPlayer() {
  const { currentColor } = useStateContext();
  const { play, setPlay, prevSong, nextSong, song, volume, handleVolume } =
    useLofiContext();

  return (
    <Box className="flex items-baseline">
      <>
        {play && (
          <Stack className="md:flex gap-2 flex-row mb-1 px-1 items-center hidden">
            <VolumeDownRounded
              className="text-lg "
              sx={{ color: currentColor }}
            />
            <Slider
              value={volume}
              onChange={handleVolume}
              sx={{
                width: "50px",
                color: currentColor,
                "& .MuiSlider-track": {},
                "& .MuiSlider-thumb": {
                  backgroundColor: "#fff",
                  width: "15px",
                  height: "15px",
                  "&:before": {
                    boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
                  },
                  "&:hover, &.Mui-focusVisible, &.Mui-active": {
                    boxShadow: "none",
                  },
                },
              }}
            />
            <VolumeUpRounded
              className="text-lg "
              sx={{ color: currentColor }}
            />
          </Stack>
        )}
      </>
      <Box className="flex  items-center justify-center">
        <IconButton
          disabled={song <= 0}
          sx={{ "&:disabled": { opacity: 0.3 } }}
          onClick={prevSong}
          aria-label="Previous Radio"
        >
          <FastRewindRounded
            className={`text-lg`}
            sx={{ color: currentColor }}
          />
        </IconButton>
        <IconButton onClick={() => setPlay(!play)} aria-label="Play">
          {!play ? (
            <PlayArrowRounded
              className="text-xl"
              sx={{ color: currentColor }}
            />
          ) : (
            <PauseRounded
              className="text-xl"
              sx={{ color: currentColor }}
              aria-label="Pause"
            />
          )}
        </IconButton>
        <IconButton
          disabled={song >= radioData.length - 1}
          sx={{ "&:disabled": { opacity: 0.3 } }}
          onClick={nextSong}
          aria-label="Next Radio"
        >
          <FastForwardRounded
            className="text-lg "
            sx={{ color: currentColor }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
