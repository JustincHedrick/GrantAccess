import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as grantsAPI from '../../utilities/grants-api';
import './GrantDetailPage.css';

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0 // (causes 2500.99 to be printed as $2,501)
});

export default function GrantDetailPage({ user, grants, setGrants, grantsCopy, setGrantsCopy }) {
    const { grantId } = useParams();
    const [grant, setGrant] = useState({});

    useEffect(() => {
        async function getGrant() {
            let grant = await grantsAPI.getGrant(grantId);
            grant = setGrantSaved(grant, user._id);
            setGrant(grant);
        }
        getGrant();
    }, []);

    function formatDate(date) {
        if (!date) return 'N/A';
        const newDate = new Date(date);
        return newDate.toLocaleDateString('en-US');
    }

    function processURL(url) {
        if (url.startsWith('http:')) {
            return url.replace('http:', 'https:');
        }
        else if (!url.startsWith('https://')) {
            return `https://${url}`;
        }
        return url;
    }

    function handleClick(userId, grantId) {
        saveGrant(userId, grantId);
    }

    async function saveGrant(userId, grantId) {
        let grant = await grantsAPI.saveGrant({ userId, grantId });
        grant = setGrantSaved(grant, userId);
        const grantIndexCopy = grantsCopy.findIndex((elem) => elem._id === grant._id);
        const grantIndex = grants.findIndex((elem) => elem._id === grant._id);
        setGrant(grant);
        setGrantsCopy([...grantsCopy.slice(0, grantIndexCopy), grant, ...grantsCopy.slice(grantIndexCopy + 1)]);
        setGrants([...grants.slice(0, grantIndex), grant, ...grants.slice(grantIndex + 1)]);
    }

    function setGrantSaved(grant, userId) {
        const usersSet = new Set([...grant.users]);
        grant.isSaved = usersSet.has(userId);
        return grant;
    }

    return (
        <div className='grid grid-cols-[minmax(0,_18fr)_minmax(0,_6fr)] py-16'>
            <article className='flex flex-col gap-6 pr-12 py-6 border-r-1 border-b-1 border-shade-100'>
                <section className='p-4 border border-2 border-primary-500'>
                    <h2 className='text-3xl font-semibold mb-2'>{grant.OpportunityTitle}</h2>
                    <p className='mb-1'><span className='font-semibold mr-1'>Eligible Applicants</span>{(grant.EligibleApplicants || 'N/A')}</p>
                    <p className='mb-1'><span className='font-semibold mr-1'>Agency</span>{grant.AgencyName}</p>
                    <p className='mb-1'><span className='font-semibold mr-1'>Funding Amount</span>{currencyFormatter.format(grant.AwardCeiling)}</p>
                    <p className='mb-1'><span className='font-semibold mr-1'>Availability</span>{formatDate(grant.CloseDate)}</p>
                </section>
                <section>
                    <h2 className='text-2xl font-semibold mb-2'>Eligibility Details</h2>
                    <p>{grant.AdditionalInformationOnEligibility}</p>
                </section>
                <section>
                    <h2 className='text-2xl font-semibold mb-2'>Grant Details</h2>
                    <p>{grant.Description}</p>
                </section>
            </article>
            <aside className='border-b-1 border-shade-100'>
                <section className='flex flex-col gap-4 pl-16 py-12 border-b-1 border-shade-100'>
                    {grant.AdditionalInformationURL ? <a href={processURL(grant.AdditionalInformationURL)} target='_blank'>
                        <button className='w-full bg-primary-500 text-base text-white px-14 py-1.5 rounded tracking-widest'>APPLY</button>
                    </a> : null}
                    <button onClick={() => handleClick(user._id, grant._id)} className='w-full bg-primary-500 text-base text-white px-14 py-1.5 rounded tracking-widest'>{grant.isSaved ? 'SAVED' : 'SAVE'}</button>
                    <p><span className='mr-1'>Closing Date:</span>{formatDate(grant.CloseDate)}</p>
                </section>
            </aside>
        </div>
    )
}
