import GrantCards from '../../components/GrantCards/GrantCards'
import GrantsAgenciesAside from '../../components/GrantsAgenciesAside/GrantsAgenciesAside';
import './GrantsPage.css';

export default function GrantsPage({ grants, grantsCopy, setGrantsCopy, setGrants }) {
    return (
        <div className='GrantsPage p-4'>
            <GrantsAgenciesAside setGrantsCopy={setGrantsCopy} grants={grants}/>
            <GrantCards grantsCopy={grantsCopy} />
        </div>
    )
}
