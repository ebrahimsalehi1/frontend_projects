export const ShowEmoji = ({ src, viewStyle, name }) => {
  return <img src={src} className={`Emoji_${viewStyle}`} alt={name}></img>;
};
