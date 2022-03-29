import { useRouter } from 'next/router';
import useIsMounted from "../../hooks/useIsMounted";

const DynamicUser = () => {

    const isMounted = useIsMounted();
    const router = useRouter();

    if(!isMounted) {
        return null
    }

    console.log({router}, router.query.id);

    return (
        <div>
            <p>Dynamic User</p>
        </div>
    )
}

export default DynamicUser;