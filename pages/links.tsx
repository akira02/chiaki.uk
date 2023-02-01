import type { NextPage } from 'next'
import React, { useState } from 'react'
import { Box, VStack, Button, Center, keyframes, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next-image-export-optimizer'
import DotBackground from 'components/index/DotBackground'
import AnimatedLogo from 'components/index/AnimatedLogo'

const spin = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg)}`

const Links: NextPage = () => {
  const [isBgLoaded, setBgLoaded] = useState(false)
  return (
    <Box width="100vw" height="100vh" overflow="hidden">
      <Box
        width="100%"
        height="100%"
        position="absolute"
        opacity={isBgLoaded ? 1 : 0}
        overflow="hidden"
        transition="opacity 1.5s ease-in-out"
      >
        <Image
          src="/assets/img/takuzosu-inari-shrine.jpg"
          alt="bg"
          objectFit="cover"
          layout="fill"
          onLoadingComplete={() => {
            setBgLoaded(true)
          }}
          style={{
            transform: `scale(${isBgLoaded ? '1.01' : '1'})`,
            transition: 'transform 2s ease-in-out',
          }}
        />
      </Box>
      <DotBackground />

      <Center width="100%" height="100%" position="absolute">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
        >
          <Box animation={`${spin} infinite 15s linear`} width="100px">
            <AnimatedLogo fastAni />
          </Box>
        </motion.div>
      </Center>

      <Center width="100vw" height="100vh">
        <Center
          width={{ base: '85vw', md: '50vw' }}
          flexDirection="column"
          zIndex="tooltip"
          color="white"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 3, ease: 'easeOut' }}
          >
            <Center mb="30px" position="relative" flexDirection="column">
              <Image
                src="/assets/img/profile.jpg"
                alt="Icon"
                height={100}
                width={100}
                style={{
                  borderRadius: '50px',
                }}
              />
              <Box fontSize={30} my="20px">
                涼風千秋
              </Box>
            </Center>
          </motion.div>

          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ delay: 1.5, duration: 1.5, ease: 'easeOut' }}
            style={{ overflow: 'hidden', width: '100%' }}
          >
            <Box
              width="100%"
              height="100%"
              borderTop="1px solid white"
              borderBottom="1px solid white"
            >
              <VStack m="20px" gap="15px">
                <Button
                  as={Link}
                  width="100%"
                  href="https://www.plurk.com/akira02"
                  isExternal
                >
                  Plurk
                </Button>

                <Button
                  as={Link}
                  width="100%"
                  href="https://instagram.com/akisakuya"
                  isExternal
                >
                  Instagram
                </Button>

                <Button as={Link} width="100%" href="/">
                  Website
                </Button>
              </VStack>
            </Box>
          </motion.div>
        </Center>
      </Center>
    </Box>
  )
}

export default Links
