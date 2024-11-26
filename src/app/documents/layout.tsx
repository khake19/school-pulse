import Layout from '~/components/Layout'

interface IDocumentsLayoutProps {
  children: React.ReactNode
}

const DocumentsLayout = ({ children }: IDocumentsLayoutProps) => {
  return <Layout>{children}</Layout>
}

export default DocumentsLayout
