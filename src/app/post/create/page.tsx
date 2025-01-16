import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import type { AppRouterPageRoute } from "@auth0/nextjs-auth0";

import MainLayout from "@/components/layout/MainLayout";
import FormCreatePost from "@/components/FormCreatePost";

async function CreatePost() {
    await getSession();

    return (
        <>
            <MainLayout>
                <FormCreatePost />
            </MainLayout>
        </>
    )
}

export default withPageAuthRequired(CreatePost, {returnTo: '/'}) as AppRouterPageRoute;