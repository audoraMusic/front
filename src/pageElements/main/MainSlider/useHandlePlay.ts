import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { playOff, playOn } from "@/redux/slices/playerSlice";
import { RootState } from "@/redux/store";

export const useHandlePlay = () => {
    const isPlaying = useSelector((state: RootState) => state.player.value);
    const isAuthenticated = useSelector((state: RootState) => state.auth.value);
    const dispatch = useDispatch();

    const handlePlay = () => {
        if (!isAuthenticated) {
            alert("Пожалуйста, войдите в аккаунт, чтобы воспроизводить музыку");
            return;
        }

        dispatch(isPlaying ? playOff() : playOn());
    };

    return handlePlay;
};
