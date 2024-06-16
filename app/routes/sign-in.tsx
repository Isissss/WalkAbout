import { json } from '@remix-run/node'
import { Form, useActionData } from '@remix-run/react'
import type { ActionFunctionArgs } from '@remix-run/node'

import { createSupabaseServerClient } from '~/supabase.server'
import PageHeader from "~/components/pageHeader";

export const action = async ({ request }: ActionFunctionArgs) => {
    const { supabaseClient, headers } = createSupabaseServerClient(request)

    const formData = await request.formData()

    const { error } = await supabaseClient.auth.signInWithOtp({
        email: formData.get('email') as string,
        options: {
            emailRedirectTo: 'http://localhost:5173/auth/callback',
        },
    })

    // just for this example
    // if there is no error, we show "Please check you email" message
    if (error) {
        return json({ success: false }, { headers })
    }

    return json({ success: true }, { headers })
}

const SignIn = () => {
    const actionResponse = useActionData<typeof action>()

    return (
        <>
            <PageHeader title='Inloggen' />
            <div className="flex flex-col items-center justify-center p-6">
                {!actionResponse?.success ? (
                    <Form method="post" className="w-full max-w-md bg-white rounded-lg shadow-md p-6 space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Uw Email-adres
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Uw Email-adres"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-[#E76217] text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Inloggen
                            </button>
                        </div>
                    </Form>
                ) : (
                    <h3 className="text-center text-lg font-medium text-green-600">
                        Gebruik de link in uw mail voor het inloggen
                    </h3>
                )}
            </div>
        </>
    )
}

export default SignIn