/**
 * Rider-Waite-Smith card meanings — upright and reversed.
 *
 * Keyed by the canonical card IDs from TAROT_CARDS (e.g. major-00,
 * minor-cups-01). These are the language-independent, human-written meanings
 * the oracle uses for real tarot readings (see falina-api readings.service).
 */

export interface TarotCardMeaning {
  keywords: string[];
  upright: string;
  reversed: string;
}

export const TAROT_CARD_MEANINGS: Record<string, TarotCardMeaning> = {
  // -- Major arcana ----------------------------------------------------------
  'major-00': {
    keywords: ['beginnings', 'innocence', 'trust', 'leap of faith'],
    upright: 'A fresh start taken on faith — the first step into the unknown with an open heart.',
    reversed: 'Reckless risk, hesitation, or a wrong turn taken in haste — pause before you leap.',
  },
  'major-01': {
    keywords: ['manifestation', 'willpower', 'skill', 'resourcefulness'],
    upright: 'You hold every tool you need — focus your will and bring it into being.',
    reversed: 'Manipulation, wasted talent, or scattered energy — align your intent and act.',
  },
  'major-02': {
    keywords: ['intuition', 'mystery', 'inner voice', 'stillness'],
    upright: 'Trust the quiet knowing within — the answers are waiting below the surface.',
    reversed: 'Ignoring your intuition, hidden secrets, or a restless mind drowning out your inner voice.',
  },
  'major-03': {
    keywords: ['abundance', 'nurture', 'creativity', 'fertility'],
    upright: 'Nurture what you are growing — abundance follows care, generosity and creation.',
    reversed: 'Overgiving, neglect of self, or a creative block — tend your own roots first.',
  },
  'major-04': {
    keywords: ['structure', 'authority', 'discipline', 'stability'],
    upright: 'Build with order and conviction — firm foundations hold through any season.',
    reversed: 'Rigid control or overbearing authority — let go of structures that no longer serve.',
  },
  'major-05': {
    keywords: ['tradition', 'guidance', 'belief', 'teaching'],
    upright: 'Follow the teachings that give you meaning — a wise mentor shows the way.',
    reversed: 'Question the rules — rebellion or stale doctrine is asking to be rewritten.',
  },
  'major-06': {
    keywords: ['love', 'union', 'choice', 'alignment'],
    upright: 'A meaningful union or a heartfelt choice made from your deepest truth.',
    reversed: 'Misalignment or indecision — choose with honesty, and the bond will clarify.',
  },
  'major-07': {
    keywords: ['will', 'victory', 'drive', 'control'],
    upright: 'Steady the reins — determination and focus carry you over the finish line.',
    reversed: 'Pulled in two directions, or momentum lost — regain control of the reins.',
  },
  'major-08': {
    keywords: ['courage', 'compassion', 'inner power', 'patience'],
    upright: 'Gentle strength tames the wild — patience and compassion are your true power.',
    reversed: 'Self-doubt or rough handling — soften the grip and trust your quiet strength.',
  },
  'major-09': {
    keywords: ['introspection', 'solitude', 'guidance', 'search'],
    upright: 'Turn inward for the truth — the light you seek is one you carry within.',
    reversed: 'Isolation taken too far, or avoiding the guidance that already waits for you.',
  },
  'major-10': {
    keywords: ['turning point', 'fate', 'cycles', 'change'],
    upright: 'The wheel turns in your favour — seize the turning point with grace.',
    reversed: 'Resisting change or riding out a setback — the cycle will complete in time.',
  },
  'major-11': {
    keywords: ['fairness', 'truth', 'karma', 'balance'],
    upright: 'Weigh the matter honestly — truth and fairness restore the balance.',
    reversed: 'Unfairness or evaded consequence — a verdict that must be revisited.',
  },
  'major-12': {
    keywords: ['surrender', 'perspective', 'pause', 'release'],
    upright: 'Hang on by letting go — a new perspective arrives through surrender.',
    reversed: 'A sacrifice that drags on, or resistance to a release that would free you.',
  },
  'major-13': {
    keywords: ['ending', 'transformation', 'release', 'rebirth'],
    upright: 'An ending that clears the ground — transform, release, and begin again.',
    reversed: 'Holding on to what must pass — resist the change and it will weigh heavier.',
  },
  'major-14': {
    keywords: ['balance', 'patience', 'blend', 'harmony'],
    upright: 'Blend the opposites with patience — moderation brings the healing flow.',
    reversed: 'Imbalance, excess or discord — return to the middle way.',
  },
  'major-15': {
    keywords: ['bonds', 'temptation', 'shadow', 'attachment'],
    upright: 'Name the chain that binds you — freedom begins the moment you see it.',
    reversed: 'A bond loosening, or an attachment you are finally ready to break.',
  },
  'major-16': {
    keywords: ['upheaval', 'awakening', 'collapse', 'truth'],
    upright: 'The tower falls so the truth can stand — upheaval clears away what was false.',
    reversed: 'A change you resisted, or a small warning before the full fall.',
  },
  'major-17': {
    keywords: ['hope', 'healing', 'guidance', 'renewal'],
    upright: 'After the storm, the star — heal, hope, and let the light guide you.',
    reversed: 'Faltering faith or a dimmed hope — the healing simply needs more time.',
  },
  'major-18': {
    keywords: ['illusion', 'intuition', 'dreams', 'uncertainty'],
    upright: 'Things are not what they seem — move by instinct through the mist.',
    reversed: 'Confusion lifting, a truth surfacing, or anxieties shrinking in the light.',
  },
  'major-19': {
    keywords: ['joy', 'success', 'vitality', 'clarity'],
    upright: 'Radiance and clear day — success, warmth and honest joy are yours.',
    reversed: 'Clouded optimism or delayed joy — a brightness dimmed by small doubts.',
  },
  'major-20': {
    keywords: ['awakening', 'reckoning', 'renewal', 'calling'],
    upright: 'Hear the call to rise — judgement brings forgiveness and a new beginning.',
    reversed: 'Self-judgement, ignoring the call, or a reckoning postponed too long.',
  },
  'major-21': {
    keywords: ['completion', 'wholeness', 'achievement', 'celebration'],
    upright: 'A cycle completes — step into the world, whole and accomplished.',
    reversed: 'An unfinished chapter, or the final step you have not yet taken.',
  },

  // -- Cups (emotions, love, intuition) --------------------------------------
  'minor-cups-01': {
    keywords: ['new feeling', 'love', 'intuition', 'opening'],
    upright: 'A new well of feeling opens — love and intuition pour in.',
    reversed: 'An overflow of emotion, blocked affection, or love waiting to be given.',
  },
  'minor-cups-02': {
    keywords: ['union', 'partnership', 'mutual love'],
    upright: 'A meeting of hearts — partnership and mutual love take root.',
    reversed: 'Imbalance in a bond, or a connection that needs honest tending.',
  },
  'minor-cups-03': {
    keywords: ['friendship', 'celebration', 'joy', 'community'],
    upright: 'Celebration with kindred spirits — friendship and joy are shared.',
    reversed: 'Feeling left out, gossip, or a celebration delayed.',
  },
  'minor-cups-04': {
    keywords: ['apathy', 'contemplation', 'discontent'],
    upright: 'A quiet moment of contemplation — consider what your heart truly wants.',
    reversed: 'Restlessness, dissatisfaction, or the urge to reach for more.',
  },
  'minor-cups-05': {
    keywords: ['loss', 'grief', 'regret'],
    upright: 'A loss that stings — grief is felt and, in time, released.',
    reversed: 'Making peace with the past, or a hurt finally beginning to heal.',
  },
  'minor-cups-06': {
    keywords: ['innocence', 'reunion', 'nostalgia', 'peace'],
    upright: 'Innocence and generosity return — old bonds offer comfort and peace.',
    reversed: 'Looking back too long, or a kindness not yet received.',
  },
  'minor-cups-07': {
    keywords: ['illusion', 'daydream', 'wishful thinking'],
    upright: 'Daydreams and choices of the heart — sort illusion from what is real.',
    reversed: 'Clarity returning, or a decision of the heart finally faced.',
  },
  'minor-cups-08': {
    keywords: ['leaving', 'moving on', 'bravery'],
    upright: 'Moving on from what no longer serves — a quiet, brave departure.',
    reversed: 'Walking in circles, or the courage to leave not yet found.',
  },
  'minor-cups-09': {
    keywords: ['contentment', 'wish fulfilled', 'satisfaction'],
    upright: 'A wish fulfilled — deep contentment and emotional satisfaction.',
    reversed: 'A hollow satisfaction, or a happiness borrowed from others.',
  },
  'minor-cups-10': {
    keywords: ['family', 'harmony', 'lasting joy'],
    upright: 'Home and family in harmony — the heart finds its lasting joy.',
    reversed: 'Tension at home, or a happiness that must be rebuilt.',
  },
  'minor-cups-11': {
    keywords: ['creative message', 'young feeling', 'openness'],
    upright: 'A tender message or creative spark — follow the feeling with openness.',
    reversed: 'A lesson of the heart unlearned, or feelings spoken too soon.',
  },
  'minor-cups-12': {
    keywords: ['romance', 'invitation', 'dream pursued'],
    upright: 'A romantic invitation, or a dream pursued with feeling and charm.',
    reversed: 'A promise not kept, or enthusiasm outpacing reality.',
  },
  'minor-cups-13': {
    keywords: ['empathy', 'nurture', 'intuition'],
    upright: 'Compassionate and intuitive — nurture others from a calm, full heart.',
    reversed: 'Emotional overwhelm, or a kindness that must include yourself.',
  },
  'minor-cups-14': {
    keywords: ['emotional mastery', 'grace', 'depth'],
    upright: 'Emotional depth held with grace — feel deeply, decide calmly.',
    reversed: 'Repressed feeling, or moods ruling the mind.',
  },

  // -- Wands (energy, action, inspiration) -----------------------------------
  'minor-wands-01': {
    keywords: ['spark', 'inspiration', 'new energy', 'beginning'],
    upright: 'A spark of new energy and inspiration — the flame of a beginning.',
    reversed: 'A stalled spark, or inspiration waiting for fuel.',
  },
  'minor-wands-02': {
    keywords: ['planning', 'boldness', 'foresight'],
    upright: 'A bold plan takes shape — look ahead and choose your path.',
    reversed: 'Fear of the unknown, or a plan not yet ready.',
  },
  'minor-wands-03': {
    keywords: ['expansion', 'foresight', 'momentum'],
    upright: 'What you build now expands your horizon — keep looking ahead.',
    reversed: 'Growth delayed, or partnerships that need clarity.',
  },
  'minor-wands-04': {
    keywords: ['celebration', 'home', 'milestone', 'stability'],
    upright: 'A milestone celebrated — stability earned and joy shared.',
    reversed: 'Restlessness at home, or a milestone you have not yet honoured.',
  },
  'minor-wands-05': {
    keywords: ['conflict', 'competition', 'friction'],
    upright: 'Clashing wills — handle friction with grace and keep the fire alive.',
    reversed: 'Conflict cooling, or peace made from the ashes.',
  },
  'minor-wands-06': {
    keywords: ['victory', 'recognition', 'success'],
    upright: 'Recognition arrives — your effort is seen and crowned.',
    reversed: 'Uncredited effort, or success arriving later than hoped.',
  },
  'minor-wands-07': {
    keywords: ['courage', 'defence', 'holding ground'],
    upright: 'Hold your ground — courage defends what you have built.',
    reversed: 'Giving up ground, or a battle you are weary of fighting.',
  },
  'minor-wands-08': {
    keywords: ['speed', 'movement', 'momentum'],
    upright: 'Quick movement and clear signals — things are finally moving fast.',
    reversed: 'Delays, scattered haste, or energy poured into the wrong fire.',
  },
  'minor-wands-09': {
    keywords: ['resilience', 'last stand', 'perseverance'],
    upright: 'A final push — resilience keeps you standing when you are weary.',
    reversed: 'Burnt out, or a struggle you must learn to set down.',
  },
  'minor-wands-10': {
    keywords: ['burden', 'completion', 'rest'],
    upright: 'A heavy load carried far — the finish line is near and rest is earned.',
    reversed: 'A burden released, or shoulders finally allowed to rest.',
  },
  'minor-wands-11': {
    keywords: ['eager discovery', 'curiosity', 'beginnings'],
    upright: 'A messenger of new energy — curiosity and eagerness to begin.',
    reversed: 'Misdirected energy, or a lesson not yet started.',
  },
  'minor-wands-12': {
    keywords: ['bold adventure', 'passion', 'movement'],
    upright: 'A bold move forward — passion and speed carry the adventure.',
    reversed: 'Impulsiveness, or a leap made before looking.',
  },
  'minor-wands-13': {
    keywords: ['confidence', 'warmth', 'magnetism'],
    upright: 'Warm, confident and magnetic — your presence ignites others.',
    reversed: 'Jealousy, or a light that dims when it should shine.',
  },
  'minor-wands-14': {
    keywords: ['vision', 'leadership', 'charisma'],
    upright: 'A born leader — vision and charisma inspire the way forward.',
    reversed: 'Overbearing vision, or a leader who has lost their way.',
  },

  // -- Swords (thought, truth, challenge) ------------------------------------
  'minor-swords-01': {
    keywords: ['breakthrough', 'truth', 'clarity'],
    upright: 'A blade of clarity — truth cuts through the confusion.',
    reversed: 'Muddied thinking, or a truth you are resisting.',
  },
  'minor-swords-02': {
    keywords: ['stalemate', 'hard choice', 'balance'],
    upright: 'A hard choice held in balance — weigh both sides with honesty.',
    reversed: 'Indecision, or a mind avoiding the truth.',
  },
  'minor-swords-03': {
    keywords: ['heartbreak', 'loss', 'grief'],
    upright: 'A wound of words or loss — the heart is pierced and healing begins.',
    reversed: 'Recovery, forgiveness, or a grief gently lifted.',
  },
  'minor-swords-04': {
    keywords: ['rest', 'recovery', 'stillness'],
    upright: 'A well-earned rest — pause and let the mind recover.',
    reversed: 'Restlessness, burnout, or the rest you keep postponing.',
  },
  'minor-swords-05': {
    keywords: ['defeat', 'conflict', 'hollow victory'],
    upright: 'A hollow victory — cut your losses and protect your peace.',
    reversed: 'Reconciliation, or laying down an old battle.',
  },
  'minor-swords-06': {
    keywords: ['transition', 'calm waters', 'journey'],
    upright: 'Troubled waters settle — travel toward calmer shores.',
    reversed: 'Stuck in the past, or a transition yet to begin.',
  },
  'minor-swords-07': {
    keywords: ['strategy', 'deception', 'caution'],
    upright: 'Play it carefully — not everything before you is as it seems.',
    reversed: 'The scheme revealed, or a bluff about to be called.',
  },
  'minor-swords-08': {
    keywords: ['restriction', 'trapped thoughts', 'self-made cage'],
    upright: 'Feeling bound — the cage is mostly in your mind; walk out of it.',
    reversed: 'Loosening bonds, or a mind beginning to free itself.',
  },
  'minor-swords-09': {
    keywords: ['anxiety', 'nightmare', 'worry'],
    upright: 'The mind makes monsters — name your worry and it shrinks.',
    reversed: 'The worry lifting, or a fear faced at last.',
  },
  'minor-swords-10': {
    keywords: ['ending', 'rock bottom', 'release'],
    upright: 'The worst has been said — an ending that clears the way for dawn.',
    reversed: 'Recovery, or the turning point after the bottom.',
  },
  'minor-swords-11': {
    keywords: ['curiosity', 'sharp words', 'honest questions'],
    upright: 'A curious mind, quick words and honest questions.',
    reversed: 'Gossip, sharp edges, or a message sent in haste.',
  },
  'minor-swords-12': {
    keywords: ['decisive action', 'speed', 'intent'],
    upright: 'Charge with clear intent — thought moves swiftly into action.',
    reversed: 'Rashness, or a charge without a target.',
  },
  'minor-swords-13': {
    keywords: ['perception', 'fairness', 'compassion'],
    upright: 'Perceptive and fair — the truth is spoken with compassion.',
    reversed: 'Harsh judgement, or a cold wind that needs warmth.',
  },
  'minor-swords-14': {
    keywords: ['intellectual authority', 'mastery', 'principle'],
    upright: 'A mind of mastery — clear, principled thought leads the way.',
    reversed: 'Cold logic, or a power used to wound.',
  },

  // -- Pentacles (material, work, abundance) ---------------------------------
  'minor-pentacles-01': {
    keywords: ['opportunity', 'abundance', 'seed'],
    upright: 'A seed of abundance — a real opportunity takes root.',
    reversed: 'A missed chance, or a seed not yet planted.',
  },
  'minor-pentacles-02': {
    keywords: ['balance', 'juggling', 'adaptability'],
    upright: 'Juggle with grace — time and money find their balance.',
    reversed: 'Overcommitted, or a balance lost.',
  },
  'minor-pentacles-03': {
    keywords: ['skill', 'teamwork', 'craft'],
    upright: 'Craft and collaboration — your skill is recognised in the work.',
    reversed: 'Lacking input, or a project without its team.',
  },
  'minor-pentacles-04': {
    keywords: ['security', 'holding', 'stability'],
    upright: 'Hold what you have built — security is a comfort, not a cage.',
    reversed: 'Gripping too tight, or generosity withheld.',
  },
  'minor-pentacles-05': {
    keywords: ['hardship', 'want', 'help'],
    upright: 'A hard patch — help and hope arrive if you reach for them.',
    reversed: 'Recovery, or a burden shared.',
  },
  'minor-pentacles-06': {
    keywords: ['generosity', 'giving', 'reciprocity'],
    upright: 'Kindness flows both ways — what you give returns.',
    reversed: 'Imbalance in giving, or a debt of the heart.',
  },
  'minor-pentacles-07': {
    keywords: ['patience', 'investment', 'growth'],
    upright: 'Wait and tend — what you planted is growing; be patient.',
    reversed: 'Impatience, or a harvest not yet ready.',
  },
  'minor-pentacles-08': {
    keywords: ['diligence', 'craft', 'steady work'],
    upright: 'Steady hands and honest work — skill grows with every pass.',
    reversed: 'Busywork, or a craft abandoned too soon.',
  },
  'minor-pentacles-09': {
    keywords: ['abundance', 'independence', 'self-sufficiency'],
    upright: 'A garden of plenty — your effort has made you self-sufficient.',
    reversed: 'Fear of loss, or abundance you cannot yet enjoy.',
  },
  'minor-pentacles-10': {
    keywords: ['legacy', 'wealth', 'roots', 'family'],
    upright: 'A lasting legacy — family, wealth and roots run deep.',
    reversed: 'Wealth that isolates, or a legacy needing care.',
  },
  'minor-pentacles-11': {
    keywords: ['new study', 'learning', 'practicality'],
    upright: 'A lesson in the making — approach the practical with fresh eyes.',
    reversed: 'Distracted study, or a plan not yet grounded.',
  },
  'minor-pentacles-12': {
    keywords: ['steady progress', 'patience', 'reliability'],
    upright: 'A patient, dependable stride toward your goal.',
    reversed: 'Routine without aim, or a path that stalls.',
  },
  'minor-pentacles-13': {
    keywords: ['nurture', 'practicality', 'comfort'],
    upright: 'Grounded and nurturing — build comfort for all around you.',
    reversed: 'Overwork, or a practicality that forgets the heart.',
  },
  'minor-pentacles-14': {
    keywords: ['abundance', 'discipline', 'mastery'],
    upright: 'A steady lord of plenty — prosperity through discipline and care.',
    reversed: 'Stubborn security, or wealth that rules the owner.',
  },
};

export function findTarotMeaning(id: string): TarotCardMeaning | undefined {
  return TAROT_CARD_MEANINGS[id];
}
