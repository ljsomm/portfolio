import { NextPageContext } from "next";


const Error = ({ statusCode } : {statusCode: any}) => {
    return (`${statusCode}`);
}


Error.getInitialProps = (ctx: NextPageContext) => {

    console.log(ctx.res?.statusCode);
    return {
        statusCode: ctx.res?.statusCode, sai: true
    }
}


export default Error;