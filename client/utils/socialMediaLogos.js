import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

export const SOCIALMEDIALOGOS = ({ link }) => {
  return (
    <div className="socialmedia">
      {link.facebooklink ? (
        <a href={link.facebooklink}>
          <FaFacebook />
        </a>
      ) : (
        ""
      )}
      {link.instagramlink ? (
        <a href={link.instagramlink}>
          <FaInstagram />
        </a>
      ) : (
        ""
      )}
      {link.telegramlink ? (
        <a href={link.telegramlink}>
          <FaTelegram />
        </a>
      ) : (
        ""
      )}
      {link.tiktoklink ? (
        <a href={link.tiktoklink}>
          <FaTiktok />
        </a>
      ) : (
        ""
      )}
      {link.twitterlink ? (
        <a href={link.twitterlink}>
          <FaTwitter />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};
