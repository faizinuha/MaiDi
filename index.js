#!/usr/bin/env node

import { Command } from 'commander';
import { downloadYoutube } from './platforms/youtube.js';
import { downloadTikTok } from './platforms/tiktok.js';
import { downloadInstagram } from './platforms/instagram.js';
import { downloadFacebook } from './platforms/facebook.js';
import { downloadTwitter } from './platforms/twitter.js';
import { showHelp } from './utils/help.js';

const program = new Command();

program
  .name('maidi')
  .argument('[url]', 'URL Video Yang Ingin di Download....')
  .description(
    'A CLI tool to download videos from various platforms like YouTube, TikTok, Instagram, Facebook, and Twitter.'
  )
  .helpOption(false)
  .option('-h, --help', 'Tampilkan panduan bantuan')
  .action(async (url, options) => {
    if (options.help || !url) {
      showHelp();
      return;
    }
    try {
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        await downloadYoutube(url);
      } else if (url.includes('tiktok.com')) {
        await downloadTikTok(url);
      } else if (url.includes('instagram.com')) {
        await downloadInstagram(url);
      } else if (url.includes('facebook.com')) {
        await downloadFacebook(url);
      } else if (url.includes('x.com') || url.includes('twitter.com')) {
        await downloadTwitter(url);
      } else {
        console.error('Error: Unsupported URL. Please provide a valid video URL.');
      }
    } catch (error) {
      console.error(
        'An error occurred while downloading the video:',
        error.message
      );
    }
  });

program.parse(process.argv);
