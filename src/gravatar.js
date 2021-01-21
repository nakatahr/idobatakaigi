import crypto from 'crypto';
export const gravatarPath = (s) => {
    const t = s.trim().toLowerCase();
    const md5 = crypto.createHash('md5');
    const digest = md5.update(t, 'binary').digest('hex');
    return `https://www.gravatar.com/avatar/${digest}/?d=monsterid`;
};
