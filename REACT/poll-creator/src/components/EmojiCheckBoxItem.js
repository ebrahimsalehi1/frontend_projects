import { ShowEmoji } from "./ShowEmoji";

export const EmojiCheckBoxItem = ({ emojis, setEmojis }) => {
  return (
    <>
      {emojis.map((emojii) => {
        return (
          <>
            <input
              type="checkbox"
              name={emojii.title}
              id="emoji-checkbox-input"
              checked={emojii.isSelected}
              onChange={(e) => {
                setEmojis(
                  [...emojis].map((obj) => {
                    if (obj.title === emojii.title) {
                      return { ...obj, isSelected: e.target.checked };
                    } else {
                      return obj;
                    }
                  })
                );
              }}
            />
            <label htmlFor={emojii.title}>
              <div>
                <ShowEmoji
                  src={emojii.src}
                  viewStyle={"checkbox"}
                  name={emojii.title}
                />
              </div>
            </label>
          </>
        );
      })}
    </>
  );
};
