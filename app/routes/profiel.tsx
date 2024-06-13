import {redirect} from '@remix-run/node'
import type {LoaderFunctionArgs} from '@remix-run/node'
import {Form} from '@remix-run/react'
import {createSupabaseServerClient} from '~/supabase.server'
import PageHeader from "~/components/pageHeader";

export const loader = async ({request}: LoaderFunctionArgs) => {
    const {supabaseClient} = createSupabaseServerClient(request)
    const {
        data: {user},
    } = await supabaseClient.auth.getUser()

    if (!user) {
        return redirect('/')
    }

    return new Response(null)
}

const Profiel = () => {
    return (
        <>
            <PageHeader title='Profiel'/>
            <section>
                <Form action="/sign-out" method="post">
                    <button type="submit">Sign Out</button>
                </Form>
            </section>
        </>
    )
}

export default Profiel