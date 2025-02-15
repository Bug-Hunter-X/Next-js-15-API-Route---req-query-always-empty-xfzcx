# Next.js 15 API Route - req.query always empty

This repository demonstrates a bug in Next.js 15 where API routes fail to receive query parameters. The `req.query` object remains empty despite parameters being included in the URL.

## Bug Report

The provided `test.js` file shows a simple API route designed to log and return query parameters. However, `req.query` consistently returns an empty object. This issue only manifests in Next.js 15.

## Solution

The solution in `testSolution.js` addresses the issue by demonstrating the correct way to fetch the query parameter, which usually works properly, but was found to be inconsistent in some cases in Next.js 15.  This specific solution may be unnecessary and the issue might be resolved in later Next.js versions.  It's crucial to check if your Next.js version is up to date.