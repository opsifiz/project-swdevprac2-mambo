import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
    
    return (
  <ul className="h-[150px] flex justify-end items-center px-15 gap-4">
    <TopMenuItem title="HOME" pageRef="/" cstart="#E8D9D9" cend="#3A231E"/>
    <TopMenuItem title="RESERVE" pageRef="/reservations"  cstart="#272727" cend="#BEBEBE" />
    <TopMenuItem title="REGISTER" pageRef="#"  cstart="#686A93" cend="#C7D2FF" />
    <TopMenuItem title="LOGIN" pageRef="/api/auth/signin"  cstart="#BBAABF" cend="#CD8181" />
  </ul>
);

}