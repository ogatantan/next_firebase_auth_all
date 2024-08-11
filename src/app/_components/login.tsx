"use client";
import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '~/firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";
import Image from 'next/image';

const Login = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user ? (
        <>
          <UserInfo/>
          <SignOutButton/>
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Login;

function SignInButton(){
	const signInWithGoogle = async () => {
	  try {
		// firebaseを使ってログインする
		await signInWithPopup(auth, provider);
	  } catch (error) {
		console.error("Sign in failed", error);
		// エラーメッセージの表示や他のエラーハンドリングをここで行う
	  }
	};
  
	return (
	  <button onClick={signInWithGoogle} >
		<p>Googleでサインイン</p>
	  </button>
	);
  }

// サインアウト
function SignOutButton(){
  return (
    <button onClick={() => auth.signOut()} >
      <p>サインアウト</p>
    </button>
  );
}

function UserInfo(){
	const photoURL = auth.currentUser?.photoURL ?? '/default-profile.png'; // デフォルト画像を指定
	const displayName = auth.currentUser?.displayName ?? 'Unknown User'; // デフォルトの表示名を指定

  return (
    <div className='userInfo'>
      <Image 
        src={photoURL} 
        alt="User Profile Image" 
        width={100} // 画像の幅を指定
        height={100} // 画像の高さを指定
      />
      <p>{displayName}</p>
    </div>
  );
}

