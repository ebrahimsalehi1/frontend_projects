import react, { useState } from "react";
import "../assets/styles/app.css";
import "../assets/styles/controls.css";
import "../assets/styles/preview.css";
import { DescriptionItem } from "./DescriptionItem";
import { ShowPreviewEmoji } from "./ShowPreviewEmoji";
import { EmojiCheckBoxItem } from "./EmojiCheckBoxItem";
import Accordion from "./Accordion";
import heart from "../assets/images/Heart Eyes Emoji.png";
import halo from "../assets/images/Smiling Face with Halo.png";
import smile from "../assets/images/Slightly Smiling Face Emoji.png";
import confused from "../assets/images/Confused Face Emoji.png";
import poker from "../assets/images/Neutral Face Emoji.png";
import angry from "../assets/images/Very Angry Emoji.png";
import mad from "../assets/images/Very Mad Emoji.png";
import clap from "../assets/images/Clapping-Hands-Emoji.png";
import ok from "../assets/images/Ok Hand Sign Emoji.png";

export const PollCreator = () => {
  const [pollTitle, setPollTitle] = useState("what is the best web framework?");
  const [emoji, setEmoji] = useState([
    {
      title: "heart",
      src: heart,
      isSelected: false,
      description: "",
    },
    {
      title: "halo",
      src: halo,
      isSelected: false,
      description: "",
    },
    {
      title: "smile",
      src: smile,
      isSelected: false,
      description: "",
    },
    {
      title: "confused",
      src: confused,
      isSelected: false,
      description: "",
    },
    {
      title: "poker",
      src: poker,
      isSelected: false,
      description: "",
    },
    {
      title: "angry",
      src: angry,
      isSelected: false,
      description: "",
    },
    {
      title: "mad",
      src: mad,
      isSelected: false,
      description: "",
    },
    {
      title: "clap",
      src: clap,
      isSelected: false,
      description: "",
    },
    {
      title: "ok",
      src: ok,
      isSelected: false,
      description: "",
    },
  ]);

  return (
    <form className="poll-container">
      <div className="poll-controls">
        <div className="poll-title">
          <Accordion title="Poll Title">
            <input
              type="text"
              className="poll-title-input"
              value={pollTitle}
              onChange={(e) => setPollTitle(e.target.value)}
            />
          </Accordion>
        </div>

        <div className="poll-emoji">
          <Accordion title="Emojis">
            <div className="poll-emoji-checkboxes">
              <EmojiCheckBoxItem emojis={emoji} setEmojis={setEmoji} />
            </div>
          </Accordion>
        </div>

        <div className="poll-description" data-testid='poll-description'>
          <Accordion title="Description">
            <DescriptionItem emojis={emoji} setEmojis={setEmoji} />
          </Accordion>
        </div>
      </div>

      <div className="poll-preview" data-testid='poll-preview'>
        <div className="poll-preview-title">{pollTitle}</div>
        <ShowPreviewEmoji emojis={emoji} />
      </div>
    </form>
  );
};
