import Link from "next/link";
import { useRouter } from "next/router";

interface ActiveLinkProps {
  key: string;
  text: string;
  href: string;
}

const style = {
    color:'#0070f3',
    textDecoration:'underline'
}

export const ActiveLink = ({key, text, href }: ActiveLinkProps) => {

  const {asPath} = useRouter();

  return (
    <Link key={key} legacyBehavior href={href}>
      <a style={ asPath === href ? style : undefined }>{text}</a>
    </Link>
  );
};
