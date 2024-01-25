import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
function About() {
  return (
    <div className="w-full bg-black text-white text-center">
    <div className='max-w-[1240px] mx-auto px-4 py-16 w-full  '>
        <div>
            <h1 className="py-4">A Growing Protocol Ecosystem</h1>
            <p className="py-4 ">The Defi protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4  mt-8">
            <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                <div>
                <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                    <SiHiveBlockchain  size={40}/>
                </div>
                <h3 className='text-xl bold py-4'>Reliable, tamper-proof network</h3>
                <p>Use decentralization, trusted nodes, premium data, and
        cryptographic proofs to connect highly accurate and available
        data/APIs to any smart contract.</p>
            </div>
            </div>
            <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                <div>
                <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                <SiFsecure size={40}/>
                </div>
                <h3 className='text-xl bold py-4'>Seamless connection to any API</h3>
                <p>Build on a flexible framework that can retrieve data from any API, 
                    connect with existing systems, and integrate with any current or future blockchain</p>
            </div>
            </div>
            <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                <div>
                <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                <SiStrapi size={40} />
                </div>
                <h3 className='text-xl bold py-4'>Proven, ready-made solutions</h3>
                <p>Integrate pre-built, time-tested oracle solutions that
                     already secure tens of billions in smart contract value for market-leading decentralized applications.</p>
            </div>
            </div>
            <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                <div>
                <div className='bg-[#00d8ff] inline-flex p-2 rounded-full'>
                <VscServerProcess size={40} />
                </div>
                <h3 className='text-xl bold py-4'>Secure off-chain computation</h3>
                <p>Use a decentralized network of 
                    DeFi Keeper nodes to automate contracts, 
                    mitigating risk of manual interventions and centralized servers</p>
            </div>
            </div>  
 
            </div>  
        </div>
        </div>
        </div>
  )
}

export default About