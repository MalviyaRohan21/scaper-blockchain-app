'use client';

import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { client, chain } from "../utils/constants";
import Dashboard from "./dashboard";

const Login = () => {
   
    const account = useActiveAccount();
    const address = account?.address;
    return(
        
        <div>
            {address ? (
                <div>
                <Dashboard address={address} />
                </div>

            ) : (

                <div>
                    <ConnectButton
                        client={client}
                        chain={chain}
                        connectModal={{
                        size: "compact",
                        }}
                    />
                </div>

            )}
            
        </div>

    )
};

export default Login;

