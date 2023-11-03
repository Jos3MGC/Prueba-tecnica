"use client";
// Hooks
import useLogin from "@/hooks/useLogin";
// Tools
import { AiOutlineArrowUp } from 'react-icons/ai';
import LottiePlayer from "react-lottie-player";
// Image
import welcomeLottie from "../../assets/AnimationLottieJson.json";
import Board from "../views/Board";

export default function LogIn() {

    const {
        username,
        password,
        handleOnChange,
        onClickLogin,
        onClickLogOut,
        isLoggin,
        handleClick,
        showLogin,
        check
    } = useLogin({
        username: '',
        password: ''
    });

    if (isLoggin) {
        return (
            <Board onClickLogOut={onClickLogOut}/>
        )
    }

    return (
        <div className="wrapper">
            <div className={`login-text ${check === 1 ? 'expand' : ''}`}>
                <button className="cta" onClick={handleClick}>
                    <AiOutlineArrowUp size={30} className={`${check === 1 ? 'rotateIcon' : 'rotateIconUp'}`} />
                </button>
                <div className={`text ${check === 1 ? 'show-hide' : ''}`}>
                    <div className={`login-box ${check === 1 ? '' : 'transition'}`} hidden={showLogin}>
                        <h2>Login</h2>
                        <form>
                            <div className="user-box">
                                <input type="email" name="username" value={username} onChange={handleOnChange} required />
                                <label>Email</label>
                            </div>
                            <div className="user-box">
                                <input type="password" name="password" value={password} onChange={handleOnChange} required />
                                <label>Contraseña</label>
                            </div>
                            <a className="pointer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={onClickLogin}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Ingresar
                            </a>
                        </form>
                    </div>
                </div>
            </div>
            <div className="call-text"  >
                <div className={`lottieImage ${check === 1 ? '' : 'transition'}`} hidden={!showLogin}>
                    <LottiePlayer
                        animationData={welcomeLottie}
                        loop
                        play
                    />
                </div>
            </div>
        </div>
    )
}