import { NextApiRequest, NextApiResponse } from 'next'
import { Methods } from '.'

// TODO: How to make these error messages more descriptive?
const api =
  (methods: Methods) => (req: NextApiRequest, res: NextApiResponse) => {
    // This one is teling TS that we're not assigning a random string
    // we're just trying to dynamically access the 'methods' object
    // @see https://stackoverflow.com/questions/62438346/how-to-dynamically-access-object-property-in-typescript
    type Method = keyof typeof methods
    const methodNames = Object.keys(methods) as Method[]

    if (!methodNames.length) {
      throw new Error('No methods were given.')
    }

    // Invoke each api handler based on the request method
    // Supported methods: get | post | put | delete
    methodNames.forEach((method: Method) => {
      if (req.method === method.toUpperCase()) {
        // '!' in the middle is indicating that this method is not undefined
        methods[method]!(req, res)
      } else {
        throw new Error('Invalid method.')
      }
    })
  }

export default api
