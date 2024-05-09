import PropTypes from "prop-types";
import { users } from "./users";

const ProfileCard = ({ username }) => {
  const user = users.find((user) => user.username === username);
  return (
    <section className="mx-6 rounded-xl bg-sl-dark-grey p-6 text-center mobile:w-[390px] mobile:p-11">
      <img
        src={user.image}
        alt="profile pic"
        className="mx-auto rounded-full mobile:mt-[6px]"
        width={90}
        height={90}
      />
      <div className="mt-6 leading-relaxed">
        <h1 className="text-[26px] font-regular">{user.username}</h1>
        <h3 className="font-semibold text-sl-primary">{user.location}</h3>
        <p className="mt-[22px] font-regular opacity-80">
          &quot;{user.desc}&quot;
        </p>
      </div>
      <ul className="mt-6 flex flex-col gap-[17px]">
        {user.socialLinks.map((link) => (
          <li key={link.name} className="social-link">
            <a href={link.url} target="_blank">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string,
};

export default ProfileCard;
