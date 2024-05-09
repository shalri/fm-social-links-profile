import avatar from "../assets/images/avatar-jessica.jpeg";
import SocialLink from "./SocialLink";
import { socialLinks } from "./socialLinks";

const Main = () => {
  return (
    <main className="flex flex-grow items-center justify-center">
      <section className="mx-6 rounded-xl bg-sl-dark-grey p-6 text-center mobile:w-[390px] mobile:p-11">
        <img
          src={avatar}
          alt="profile pic"
          className="mx-auto rounded-full mobile:mt-[6px]"
          width={90}
          height={90}
        />
        <div className="mt-6 leading-relaxed">
          <h1 className="text-[26px] font-regular">Jessica Randall</h1>
          <h3 className="font-semibold text-sl-primary">
            London, United Kingdom
          </h3>
          <p className="mt-[22px] font-regular opacity-80">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </div>
        <ul className="mt-6 flex flex-col gap-[17px]">
          {socialLinks.map((link) => (
            <SocialLink key={link.name} name={link.name} url={link.url} />
          ))}
          {/* <li className="social-links">GitHub</li> */}
          {/* <li className="social-links">Frontend Mentor</li> */}
          {/* <li className="social-links">Linkedin</li> */}
          {/* <li className="social-links">Twitter</li> */}
          {/* <li className="social-links">Instagram</li> */}
        </ul>
      </section>
    </main>
  );
};

export default Main;
