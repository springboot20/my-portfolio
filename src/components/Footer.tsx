export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="py-5">
        <p className="capitalize text-center font-inter font-normal text-base text-port-black">
          &copy;{new Date().getFullYear()} all rights reservered. codesuite
        </p>
      </div>
    </footer>
  );
}
