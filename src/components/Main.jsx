import avatar from "../assets/images/avatar-jessica.jpeg";

const Main = () => {
  return (
    <main className="flex justify-center items-center flex-grow">
      <section className="bg-sl-dark-grey h-[580px] min-w-[330px] rounded-xl p-6 mx-6 text-center sm:max-w-[380px]">
        <img
          src={avatar}
          alt="profile pic"
          className="rounded-full mx-auto"
          width={90}
          height={90}
        />
        <div className="mt-6 leading-relaxed">
          <h1 className="text-[26px] font-normal">Jessica Randall</h1>
          <h3 className="text-sl-primary font-semibold">
            London, United Kingdom
          </h3>
          <p className="font-regular mt-[25px] opacity-80">
            &quot;Front-end developer and avid reader.&quot;
          </p>
        </div>
        <ul className="mt-6 flex flex-col gap-[17px]">
          <li className="bg-sl-grey py-[12px] rounded-lg font-bold">GitHub</li>
          <li className="bg-sl-grey py-[12px] rounded-lg font-bold">
            Frontend Mentor
          </li>
          <li className="bg-sl-grey py-[12px] rounded-lg font-bold">
            Linkedin
          </li>
          <li className="bg-sl-grey py-[12px] rounded-lg font-bold">Twitter</li>
          <li className="bg-sl-grey py-[12px] rounded-lg font-bold">
            Instagram
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Main;
