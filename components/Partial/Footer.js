import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 md:px-16 px-5 py-10 footer-menu">
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact Us</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <Link href="/">
              <a>Cookie Policy</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Terms and Conditions</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Partnership</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="font-bold text-lg">Call Us</li>
          <li>
            <Link href="/">
              <a>+(999) 999-99-99</a>
            </Link>
          </li>
          <li>
            <Link href="mailto:info@gmail.com">
              <a>info@gmail.com</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className="social-icons">
        <h2 className="font-bold text-lg">Follow Us</h2>
        <ul className="flex">
          <li>
            <Link href="/">
              <a target="_blank">
                <FaFacebookF className="w-6 h-6" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a target="_blank">
                <FaInstagram className="w-6 h-6" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a target="_blank">
                <FaPinterest className="w-6 h-6" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
