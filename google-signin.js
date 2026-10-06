/* Google sign-in uses Firebase's popup flow and the existing UID-based cloud store. */
function cloudGoogleProvider(){const provider=new CLOUD.sdk.GoogleAuthProvider();provider.setCustomParameters({prompt:'select_account'});return provider;}
function cloudUsesGoogleOnly(user=CLOUD.auth?.currentUser){const ids=(user?.providerData||[]).map(p=>p.providerId);return ids.includes('google.com')&&!ids.includes('password');}
function cloudGoogleError(error){
 const messages={
  'auth/popup-closed-by-user':'Google sign-in was cancelled. You can try again.',
  'auth/cancelled-popup-request':'Another sign-in window was opened. Use the latest window.',
  'auth/popup-blocked':'Your browser blocked the sign-in window. Allow popups for this site and try again.',
  'auth/unauthorized-domain':'Google sign-in is not configured for this website address. Please contact the site owner.',
  'auth/operation-not-allowed':'Google sign-in has not been enabled for this site yet.',
  'auth/admin-restricted-operation':'New Google accounts are not available yet. You can use email registration while setup is completed.',
  'auth/account-exists-with-different-credential':'This email already has an account. Sign in using its existing method, then open Settings and select Link Google account to keep your saved progress.',
  'auth/credential-already-in-use':'That Google account is already linked to another profile. Sign in with that account instead; profiles have not been merged.',
  'auth/provider-already-linked':'A Google account is already linked to this profile.',
  'auth/user-mismatch':'Choose the Google account belonging to this profile.'
 };
 const text=String(error.message||'');
 if(text.includes('DUCK_REGISTRATION_LIMIT'))return 'Too many new accounts from this network, or the site registration limit has been reached. Please try again later.';
 if(text.includes('DUCK_GOOGLE_UNVERIFIED'))return 'Google did not confirm a verified email for this account. Use the email registration form instead.';
 if(text.includes('DUCK_REGISTRATION_UNAVAILABLE'))return 'Registration is temporarily unavailable. Please try again shortly.';
 return messages[error.code]||cloudError(error);
}
async function doGoogleSignIn(fromRegister=false){
 if(CLOUD.busy)return;
 if(!CLOUD.sdk){authErr('Sign-in is still loading. Please try again shortly.');return;}
 const optIn=document.getElementById(fromRegister?'rgLeaderboardOptIn':'siLeaderboardOptIn');
 const consent=optIn.checked;
 CLOUD.busy=true;cloudAuthControls(true);authErr('Opening Google sign-in…');
 try{
  await CLOUD.sdk.setPersistence(CLOUD.auth,document.getElementById('rememberAccount').checked?CLOUD.sdk.browserLocalPersistence:CLOUD.sdk.browserSessionPersistence);
  const result=await CLOUD.sdk.signInWithPopup(CLOUD.auth,cloudGoogleProvider());
  if(consent)rememberLeaderboardOptIn(result.user.uid,'google-sign-in');
  optIn.checked=false;
  await cloudOpenUser(result.user);authErr('');
 }catch(error){authErr(cloudGoogleError(error));}
 finally{CLOUD.busy=false;cloudAuthControls(false);}
}
function refreshGoogleAccountSettings(){
 const user=CLOUD.auth?.currentUser,googleOnly=cloudUsesGoogleOnly(user),linked=(user?.providerData||[]).some(p=>p.providerId==='google.com');
 const get=id=>document.getElementById(id);
 get('googleAccountStatus').textContent=linked?'Google account linked. Your saved progress belongs to this profile.':'You can link Google to this profile and keep all your saved progress.';
 get('linkGoogleBtn').hidden=linked;get('linkGoogleBtn').disabled=CLOUD.busy||!user;
 get('settingsCurrentPin').closest('label').hidden=googleOnly;
 get('reauthHelp').textContent=googleOnly?'To add a password or delete this account, confirm your Google account in the popup.':'Your current password is required when changing your password or deleting your account.';
 get('deleteAccountPassword').required=!googleOnly;get('deleteAccountPassword').closest('label').hidden=googleOnly;
}
async function linkGoogleAccount(){
 const user=CLOUD.auth?.currentUser,status=document.getElementById('profileSettingsStatus');if(CLOUD.busy||!user)return;
 CLOUD.busy=true;setProfileSettingsBusy(true);status.textContent='Choose the Google account to link…';
 try{
  const result=await CLOUD.sdk.linkWithPopup(user,cloudGoogleProvider());
  if(result.user.uid!==user.uid)throw Error('Account linking did not return the current profile.');
  status.textContent='Google linked. You can now use Continue with Google to open this same profile.';
 }catch(error){status.textContent=cloudGoogleError(error);}
 finally{CLOUD.busy=false;setProfileSettingsBusy(false);refreshGoogleAccountSettings();}
}
(function(){
 const icon='<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.39-.18-2.05H12v3.88h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.89-1.74 2.98-4.31 2.98-7.36z"/><path fill="#34A853" d="M12 22c2.7 0 4.96-.9 6.62-2.41l-3.24-2.51c-.9.6-2.05.97-3.38.97-2.61 0-4.82-1.77-5.61-4.15H3.04v2.59A10 10 0 0 0 12 22z"/><path fill="#FBBC05" d="M6.39 13.9a6 6 0 0 1 0-3.8V7.51H3.04a10 10 0 0 0 0 8.98l3.35-2.59z"/><path fill="#EA4335" d="M12 5.95c1.47 0 2.79.51 3.83 1.51l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.96 5.51l3.35 2.59C7.18 7.72 9.39 5.95 12 5.95z"/></svg>';
 document.querySelectorAll('.google-auth-button').forEach(b=>{const label=b.textContent;b.innerHTML=icon+'<span>'+label+'</span>';});
 document.getElementById('googleSignInBtn').onclick=()=>doGoogleSignIn(false);
 document.getElementById('googleRegisterBtn').onclick=()=>doGoogleSignIn(true);
 document.getElementById('linkGoogleBtn').onclick=linkGoogleAccount;
 new MutationObserver(()=>refreshGoogleAccountSettings()).observe(document.getElementById('profileSettings'),{attributes:true,attributeFilter:['open']});
})();
